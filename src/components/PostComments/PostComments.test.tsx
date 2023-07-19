import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar o comentario', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('campo-comment'), {
            target: {
                value: 'adicionando comentario'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comment'))
        expect(screen.getByText('adicionando comentario')).toBeInTheDocument()
    })

});