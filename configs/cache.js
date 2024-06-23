import NodeCache from 'node-cache';
import usuario from '../router/usuariosRouter';

const cache = new NodeCache();

cache.set('token', 'valor');

const valor = cache.get('token');
console.log('valor do cache', valor);

cache.set('token2', 'valor', 30);
if (cache.has('token2')) {
    console.log('token2 está no cache:',
        cache.get('token2')
    )
} else {
    console.log('token2 não está no cache');
}

usuario.get('token', (err, reply) => {
    if (err) {
        console.error('Erro ao obter valor cache:', err);
    } else {
        console.log('valor do cache:', reply);
    }
});