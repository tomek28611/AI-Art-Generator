import React, { useState, useEffect } from 'react'
import { Loader, Card, FormField } from '../components'

const RenderCards = ({ data, title }) => {
    if (data?.lenght > 0) {
        return data.map((post) => <Card key={data._id} {...post} />)
    }
    return (
        <h2 className="mt-5 font-bold text-blue-600 text-xl uppercase">{title}</h2>
    )
}
const Home = () => {
    const [loading, setLoading] = useState(false);
    const [allPosts, setAllPosts] = useState(null);
    const [searchText, setSearchText] = useState('');

    return (
        <section className="max-w-7xl mx-auto">
            <div>
                <h1 className="font-extrabold text-gray-800 text-[32px]">
                    The Community Showcase
                </h1>
                <p className="mt-2 text-gray-500 text-[14px] max-w-[500px]">
                    Browse a images collection
                </p>
            </div>
            <div className="mt-16">
                <FormField />
            </div>

            <div className="mt-10">
                {loading ? (
                    <div className="flex justify-center items-center">
                        <Loader />
                    </div>
                ) : (
                    <>
                        {searchText && (
                            <h2 className="font-medium text-gray-500 text-xl mb-3">
                                Showing results for <span className="text-gray-800">{searchText}</span>
                            </h2>
                        )}

                        <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2
                grid-cols-1 gap-3">
                            {searchText ? (
                                <RenderCards data={[]} title="No results found" />
                            ) : (
                                <RenderCards data={[]} title="No posts found" />
                            )}

                        </div>
                    </>
                )}
            </div>

        </section>
    )
}

export default Home