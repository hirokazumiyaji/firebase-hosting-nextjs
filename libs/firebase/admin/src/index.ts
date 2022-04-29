import { apps, initializeApp } from "firebase-admin";

export const app = apps.length ? apps[0] : initializeApp();
