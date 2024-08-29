import http from 'node:http';
import { mimeTypes } from './helpers';
import {
  createNoteController,
  deleteNoteController,
  getNoteByIdController,
  getNotesController,
  updateNoteController,
} from './notesController';

const requestListener: http.RequestListener = (req, res) => {
  const url = req.url || '/';
  const method = req.method || 'GET';
  const rootPattern = /^\/$/;
  const notesPattern = /^\/notes$/;
  const notesIdPattern = /^\/notes\/[0-9]+$/;

  console.log('url:', url, 'method:', method);
  if (rootPattern.test(url)) {
    res.writeHead(200, mimeTypes['text/plain']);
    res.end('Bienvenido a notas');
  } else if (notesPattern.test(url) && method === 'GET') {
    getNotesController(req, res);
  } else if (notesPattern.test(url) && method === 'POST') {
    createNoteController(req, res);
  } else if (notesIdPattern.test(url) && method === 'GET') {
    const id = +url.split('/')[2];
    getNoteByIdController(req, res, id);
  } else if (notesIdPattern.test(url) && method === 'PATCH') {
    const id = +url.split('/')[2];
    updateNoteController(req, res, id);
  } else if (notesIdPattern.test(url) && method === 'DELETE') {
    const id = +url.split('/')[2];
    deleteNoteController(req, res, id);
  } else {
    res.writeHead(404, mimeTypes['text/plain']);
    res.end('Ruta no encontrada');
  }
};

const server = http.createServer(requestListener);
server.listen(5500);
