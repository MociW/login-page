const Forgot = () => {
    return (
        <>
            <div className="h-[280px] w-[400px] bg-[#FFFFFF] rounded-xl flex flex-col justify-center">
                <div className="my-3 text-3xl font-bold text-center text-[#1C5D99] ">
                    Forgot Password
                </div>
                <form action="">
                    <div className="mb-3 px-9">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-[#1C5D99] mb-1"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="kisaragi@gmail.com"
                            className="border border-[#BBCDE5] text-gray-900 text-sm rounded-lg focus:ring-[#1C5D99]  focus:border-[#1C5D99] w-full block p-2.5"
                            id="email"
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
                <div className="text-xs text-center">
                    You dont have an account? Register or Forgot Password?
                </div>
            </div>
        </>
    );
};

export default Forgot;
