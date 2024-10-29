import { useParams } from "react-router-dom"

function BookDetails() {
    const { bookId } = useParams()

    return (
        <>
            <h1>BookDetails</h1>

            <p>Livro: {bookId}</p>
        </>
    )
}

export default BookDetails