export default function UserProfile({params}: any) {
    return(
        <div className=" flex flex-col items-center justify-center min-h-screen py-2 bg-black">
            <h1 className=" text-white">Profile</h1>
            <hr />
            <p className=" text-white">Profile page <span className=" bg-gray-700 text-white p-2">{params.id}</span></p>
        </div>
    )
}