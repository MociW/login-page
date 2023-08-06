const Password = () => {
    return (
        <>
            <div className="h-[340px] w-[400px] bg-[#FFFFFF] rounded-xl flex flex-col justify-center">
                <div className="text-4xl font-bold text-center text-[#1C5D99] ">Login</div>
                <form action="">
                    <div className="mb-4 px-9">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-[#1C5D99] mb-1"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            className="border border-[#BBCDE5] text-gray-900 text-sm rounded-lg focus:ring-[#1C5D99]  focus:border-[#1C5D99] block w-full p-2.5"
                            id="password"
                            required
                        />
                    </div>
                    <div className="mb-4 px-9">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-[#1C5D99] mb-1"
                        >
                            Confirm Your Password
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            className="border border-[#BBCDE5] text-gray-900 text-sm rounded-lg focus:ring-[#1C5D99]  focus:border-[#1C5D99] block w-full p-2.5"
                            id="password"
                            required
                        />
                    </div>
                    <div className="flex justify-center mb-4">
                        <button
                            type="submit"
                            className="p-2.5 rounded-lg text-sm font-semibold w-52 bg-[#BBCDE5] text-[#222222] hover:bg-[#1C5D99] hover:text-[#FFFFFF]"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Password;
