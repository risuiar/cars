import CardSkeleton from "./CardSkeleton"

const CarsList = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />

    </div>
}

export default CarsList
