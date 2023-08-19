import storage from './storage';

export async function onSignIn(user: any) {
  storage.setItem('USER', JSON.stringify(user));
}

export async function onSignOut() {
  storage.removeItem("USER");
}

export async function UserSignedIn() {
  const user = await storage.getItem('USER');
  if (user) {
    return JSON.parse(user);
  }
}
