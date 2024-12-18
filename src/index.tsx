import { createRoot } from 'react-dom/client'
import { App, Book } from './App'
import { BrowserRouter, Route, Routes } from 'react-router'
import { HomePage } from './pages/HomePage'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { BookDetail } from './pages/BookDetail'
import { ApiData } from './dataLoaders'

const domNode = document.getElementById('root')
if (domNode != null) {
    const root = createRoot(domNode)
    root.render(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/home' element={<HomePage
                        selectedFilter={'title'} search={''} library={[]} onRefresh={function (): void {
                            throw new Error('Function not implemented.')
                        } } onSearch={function (): void {
                            throw new Error('Function not implemented.')
                        } } />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/book/:id' element={<BookDetail
                        book={{
                            kind: 'rejected',
                            errorMessage: undefined
                        }} onGoBack={function (): void {
                            throw new Error('Function not implemented.')
                        } } onLoaded={function (data: ApiData<Book>): void {
                            throw new Error('Function not implemented.')
                        } } onRetry={function (): void {
                            throw new Error('Function not implemented.')
                        } } />} />
                <Route path='*' element={<div>404 Not Found</div>} />
            </Routes>
        </BrowserRouter>
    )
}

// TODO: 
//  - Write more routes for Home, About, Contact and BookDetail. 
