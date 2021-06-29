if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

const productRouter = require('./router/productRouter');
const userRoutes = require('./router/userRoutes');

mongoose
	.connect('mongodb://localhost:27017/e-commerce', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	})
	.then(() => console.log('mongoose connected'))
	.catch((err) => console.log(err));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/products', productRouter);
app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
	res.send('api running ...');
});

app.use('*', (req, res, next) => {
	next(new Error('api not found'));
});

app.use((err, req, res, next) => {
	const status = err.status || 500;
	if (!err.message) err.message === 'invalid data';

	res.status(status).json({ message: err.message, stack: process.env.NODE_ENV !== 'production' ? err.stack : null });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
