import { Note } from "../types/note";

const notes: Note[] = [
  {
    noteId: "id1",
    userId: "user1",
    createdAt: Date.now(),
    content: "Hello World!",
  },
  {
    noteId: "id2",
    userId: "user2",
    createdAt: Date.now() - 10000,
    content: "Hello Old World! Old note.",
  },
];

export default notes;
