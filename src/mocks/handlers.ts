import { http, HttpResponse } from 'msw'
import { IUser } from '../app/services/user.service';

export const handlers = [
  // Ejemplo de API mock
  http.get('/api/users', () => {
    return HttpResponse.json([
      { id: 1, name: 'Juan Pérez', email: 'juan@example.com' },
      { id: 2, name: 'María García', email: 'maria@example.com' },
    ])
  }),

  http.post('/api/users', async ({ request }) => {
    const newUser = await request.json() as Partial<IUser>;

    if (!newUser.name?.trim() || !newUser.email?.trim()) {
      return HttpResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    return HttpResponse.json(
      { id: Date.now(),
        name: newUser.name,
        email: newUser.email
     },
      { status: 201 }
    )
  }),
]