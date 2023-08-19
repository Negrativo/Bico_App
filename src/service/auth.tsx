import storage from './storage';

export async function onSignIn(user: any) {
  storage.setItem('USER', JSON.stringify(user));
}

export async function onSignOut() {
  const user = await storage.removeItem("USER")
  if (user == null) {
    return true
  } else {
    return false
  }
}

export async function UserSignedIn() {
  const user = await storage.getItem('USER');
  if (user) {
    return JSON.parse(user);
  }
}
