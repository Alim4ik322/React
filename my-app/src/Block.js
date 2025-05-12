import React from 'react';
import styled from 'styled-components';

// Создание первого стилизованного дива (DIVA)
const DIVA = styled.div`
    width: 150px;
    height: 150px;
    background-color: yellow;
    border: 2px solid black;
`;

// Создание второго стилизованного дива (DIVB) на основе DIVA
const DIVB = styled(DIVA)`
    background-color: green;
    border-width: 3px;
`;

// Контейнер для размещения компонентов
const Container = styled.div`
    display: flex;
    gap: 10px;
`;

// Основной компонент Block1
function Block() {
    return (
        <Container>
            <DIVA />
            <DIVB />
            <DIVA />
        </Container>
    );
}

export default Block;
