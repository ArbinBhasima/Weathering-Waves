import React from 'react';

function TopButtons() {
    const cities = [
        {
            id: 1,
            title: 'Tokyo',
        },
        {
            id: 2,
            title: 'Thimi',
        },
        {
            id: 3,
            title: 'Bhaktapur',
        },
        {
            id: 4,
            title: 'Kathmandu',
        },
        {
            id: 5,
            title: 'Patan',
        },
    ];

    return (
        <div className="flex flex-row items-center justify-center">
            {cities.map((city) => (
                <button key={city.id} className="  bg-blue-500 text-white text-lg font-medium py-2 px-4 rounded-lg mr-2 mb-2">
                    {city.title}
                </button>
            ))}
        </div>
    );
}

export default TopButtons;
