export default function handler(req, res) {
    const products = [
        { id: 1, name: 'Air Fryer', price: 10.00 },
        { id: 2, name: 'Toaster', price: 20.00 },
        { id: 3, name: 'Microwave', price: 30.00 },
    ];

    // Handle GET request
    if (req.method === 'GET') {
        res.status(200).json(products);
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
