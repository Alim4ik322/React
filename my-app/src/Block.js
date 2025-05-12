import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    gap: 10px;
`;

const Button = styled.button`
    padding: 8px 12px;
    border: none;
    cursor: pointer;

    background-color: ${({ warn }) => (warn ? 'yellow' : 'green')};
    color: ${({ warn }) => (warn ? 'red' : 'white')};
`;

function Block() {
    return (
        <Container>
            <Button disabled>Первая</Button>
            <Button warn>Вторая</Button>
            <Button type="reset">Третья</Button>
        </Container>
    );
}

export default Block;
