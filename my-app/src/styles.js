// src/styles.js

const class1 = {
	width: '200px',
	border: '2px solid brown',
	padding: '10px',
	textAlign: 'center',
};

const class2 = {
	color: 'orangered',
	fontWeight: 'bold',
};

const class3 = {
	fontStyle: 'italic',
	color: 'brown',
};

const class4 = {
	backgroundColor: 'orange',
	fontWeight: 'bold',
	color: 'white',
};

// Экспортируем стили как единый объект
export const styles = {
	class1,
	class2,
	class3,
	class4,
};
