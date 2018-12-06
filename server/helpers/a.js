import email from './email';



const message = `<h2>Testing this mail</h2>
                <p> Your Parcels location is abc<p>
                `;
email('omede.eneojo@gmail.com','Location has changed',message);