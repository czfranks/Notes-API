import { IncomingMessage, ServerResponse } from 'http';
import { IdGenerator, mimeTypes } from './helpers';
import { readFile, writeFile } from 'fs/promises';

interface Note {
  id: number;
  content: string;
}

const path = 'src/notes.json';

export const getNotesController = (
  _req: IncomingMessage,
  res: ServerResponse
) => {
  (async () => {
    try {
      const data = await readFile(path, 'utf-8');
      res.writeHead(200, mimeTypes['application/json']);
      res.end(data);
    } catch (error) {
      console.log(error);
    }
  })();
};

export const getNoteByIdController = (
  _req: IncomingMessage,
  res: ServerResponse,
  id: number
) => {
  (async () => {
    try {
      const data = await readFile(path, 'utf-8');
      const notes: Note[] = JSON.parse(data);
      const note = notes.find((note) => note.id === id);
      if (note) {
        res.writeHead(200, mimeTypes['application/json']);
        res.end(JSON.stringify(note));
      } else {
        res.writeHead(404, mimeTypes['application/json']);
        res.end(JSON.stringify({ error: 'id invalido' }));
      }
    } catch (error) {
      console.log(error);
    }
  })();
};

export const createNoteController = (
  req: IncomingMessage,
  res: ServerResponse
) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk.toString();
  });
  req.on('end', async () => {
    const { content } = JSON.parse(body);
    const note: Note = { id: IdGenerator.id, content };
    try {
      const data = await readFile(path, 'utf-8');
      const notes: Note[] = JSON.parse(data);
      notes.push(note);
      await writeFile(path, JSON.stringify(notes));
      res.writeHead(200, mimeTypes['application/json']);
      res.end(JSON.stringify(note));
    } catch (error) {
      console.log(error);
    }
  });
};

export const updateNoteController = (
  req: IncomingMessage,
  res: ServerResponse,
  id: number
) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk.toString();
  });
  req.on('end', async () => {
    const { content } = JSON.parse(body);
    try {
      const data = await readFile(path, 'utf-8');
      const notes: Note[] = JSON.parse(data);
      const note = notes.find((note) => note.id === id);
      if (note) {
        note.content = content;
        const serializedNotes = JSON.stringify(notes);
        await writeFile(path, serializedNotes);
        res.writeHead(200, mimeTypes['application/json']);
        res.end(JSON.stringify(note));
      } else {
        res.writeHead(404, mimeTypes['application/json']);
        res.end(JSON.stringify({ error: 'id invalido' }));
      }
    } catch (error) {
      console.log(error);
    }
  });
};

export const deleteNoteController = (
  _req: IncomingMessage,
  res: ServerResponse,
  id: number
) => {
  (async () => {
    try {
      const data = await readFile(path, 'utf-8');
      const notes: Note[] = JSON.parse(data);
      const index = notes.findIndex((note) => note.id === id);
      if (index != -1) {
        notes.splice(index, 1);
        await writeFile(path, JSON.stringify(notes));
        res.writeHead(200, mimeTypes['text/plain']);
        res.end('Nota eliminada');
      } else {
        res.writeHead(404, mimeTypes['application/json']);
        res.end(JSON.stringify({ error: 'id invalido' }));
      }
    } catch (error) {
      console.log(error);
    }
  })();
};
