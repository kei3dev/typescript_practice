import { Hono } from "hono"

let blogs = [
  { id: 1, title: "blog1", content: "blog1 post" },
  { id: 2, title: "blog2", content: "blog2 post" },
  { id: 3, title: "blog3", content: "blog3 post" },
]

const app = new Hono()

app.get("/blogs", (c) => c.json({ data: blogs }))

app.get("/blogs/:id", (c) => {
  const id = Number(c.req.param("id"))
  if (isNaN(id)) {
    return c.json({ error: "Invalid id" }, 400)
  }
  const post = blogs.find((blog) => blog.id === id)
  if (!post) {
    return c.json({ error: "Blog not found" }, 404)
  }
  return c.json(post)
})

app.post("/blogs", async (c) => {
  const { title, content } = await c.req.json<{
    title: string
    content: string
  }>()
  if (!title || !content) {
    return c.json({ error: "Can not create new blog" }, 422)
  }
  const newBlog = { id: blogs.length + 1, title, content }
  blogs = [...blogs, newBlog]
  return c.json(newBlog, 201)
})

app.put("/blogs/:id", async (c) => {
  const id = Number(c.req.param("id"))
  if (isNaN(id)) {
    return c.json({ error: "Invalid id" }, 400)
  }
  const index = blogs.findIndex((blog) => blog.id === id)
  if (index === -1) {
    return c.json({ error: "Blog not found" }, 404)
  }
  const { title, content } = await c.req.json<{
    title: string
    content: string
  }>()
  if (!title && !content) {
    return new Response(null, { status: 204 })
  }
  blogs[index] = { ...blogs[index], title, content }
  return c.json(blogs[index])
})

app.delete("/blogs/:id", async (c) => {
  const id = Number(c.req.param("id"))
  if (isNaN(id)) {
    return c.json({ error: "Invalid id" }, 400)
  }
  const index = blogs.findIndex((blog) => blog.id === id)
  if (index === -1) {
    return c.json({ error: "Blog not found" }, 404)
  }
  blogs = blogs.filter((blog) => blog.id !== id)
  return c.json({ message: "blog deleted" })
})

export default app
