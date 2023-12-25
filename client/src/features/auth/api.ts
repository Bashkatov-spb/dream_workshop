import type { AuthResponse, User } from './types/types';

export const registrationFetch = async (obj: User): Promise<AuthResponse> => {
  const response: Response = await fetch('/api/auth/registration', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify(obj),
  });
  if (!response.ok) {
    throw new Error('Ошибка запроса');
  }
  return (await response.json()) as AuthResponse;
};

export const authorizationFetch = async (obj: {
  email: string;
  password: string;
}): Promise<AuthResponse> => {
  const response = await fetch('/api/auth/authorization', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify(obj),
  });

  if (!response.ok) {
    throw new Error('Ошибка запроса');
  }
  return (await response.json()) as AuthResponse;
};

export const checkUserFetch = async (): Promise<AuthResponse> => {
  const data = (await (await fetch('/api/auth/check')).json()) as AuthResponse;
  return data;
};

export const logoutFetch = async (): Promise<{ message: string }> => {
  const data = (await (await fetch('/api/auth/logout')).json()) as { message: string };
  return data;
};
