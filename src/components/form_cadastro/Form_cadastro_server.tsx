"use server";
import { redirect } from 'next/navigation';
import { api } from '@/service/server';

export async function handleSubmit(formdata: FormData) {
  const email = formdata.get("email");
  const password = formdata.get("password");
  const name = formdata.get("name");

  await api.post('register', {
    email, password, name
  });

  return redirect('/');
}
