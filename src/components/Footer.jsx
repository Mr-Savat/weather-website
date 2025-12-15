import React from 'react'

function Footer() {
    return (
        <footer className="mt-12 py-6">
            <div className="text-center text-gray-600">
                <p>© {new Date().getFullYear()} ព្យាករណ៍អាកាសធាតុ</p>
                <p className="text-sm mt-1 text-gray-500">ទិន្នន័យអាកាសធាតុមកពី OpenWeatherMap</p>
            </div>
        </footer>
    )
}

export default Footer