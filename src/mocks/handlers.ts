import { http, HttpResponse } from 'msw'

export const handlers = [
  // Ejemplo de API mock
  http.get('/api/users', () => {
    return HttpResponse.json([
      { id: 1, name: 'Juan Pérez', email: 'juan@example.com' },
      { id: 2, name: 'María García', email: 'maria@example.com' },
    ])
  }),

  http.post('/api/users', async ({ request }) => {
    const newUser = await request.json()
    return HttpResponse.json(
      { id: Date.now(), user: newUser },
      { status: 201 }
    )
  }),
]