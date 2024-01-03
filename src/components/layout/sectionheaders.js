export default function ({subHeader,mainHeader}){
    return(
        <>
        <h3 className="font-semibold text-gray-500 uppercase">{subHeader}</h3>
        <h2 className="text-4xl italic font-bold text-red-500">{mainHeader}</h2>
        </>
    )
}