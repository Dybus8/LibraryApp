import React = require("react")
import { Book } from "../App"
import { DataLoader } from "../DataLoader"
import { ApiData, Idle, Pending } from "../dataLoaders"
import { useParams } from "react-router"

interface BookDetailProps {
    book: ApiData<Book>
    onGoBack: () => void
    onLoaded: (data: ApiData<Book>) => void
    onRetry: () => void
}

export const BookDetail = (props: BookDetailProps) => {
    const [state, setState] = React.useState<BookState>({book: Idle()})
    const { id } = useParams<useParams>()
    if (props.book.kind == 'idle'){
        
        setState(s => ({...s, book: Pending(GetBookById("1"))}))
    }
    if (props.book.kind != 'fullfilled') return <DataLoader<Book>
        data={props.book}
        onLoaded={props.onLoaded}
        onRetry={props.onRetry}
    />
    return <div>
        <button onClick={props.onGoBack}>Go back to overview</button>
        <h1>{props.book.data.title}</h1>
        <p>Genre: {props.book.data.genre}</p>
        <p>Autor: {props.book.data.author}</p>
        <p>Year published: {props.book.data.year}</p>
    </div>
}