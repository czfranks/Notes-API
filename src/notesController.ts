import { IncomingMessage, ServerResponse } from 'http';
import { mimeTypes } from './helpers';

export const getNotesController = (
  _req: IncomingMessage,
  res: ServerResponse
) => {
  res.writeHead(200, mimeTypes['text/plain']);
  res.end('get all Notes');
};

export const getNoteByIdController = (
  _req: IncomingMessage,
  res: ServerResponse,
  id: number
) => {
  res.writeHead(200, mimeTypes['text/plain']);
  res.end(`get Note ${id}`);
};

export const createNoteController = (
  _req: IncomingMessage,
  res: ServerResponse
) => {
  res.writeHead(200, mimeTypes['text/plain']);
  res.end('create Note');
};

export const updateNoteController = (
  _req: IncomingMessage,
  res: ServerResponse,
  id: number
) => {
  res.writeHead(200, mimeTypes['text/plain']);
  res.end(`update Note ${id}`);
};

export const deleteNoteController = (
  _req: IncomingMessage,
  res: ServerResponse,
  id: number
) => {
  res.writeHead(200, mimeTypes['text/plain']);
  res.end(`delete Note ${id}`);
};
