export default function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
            <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                <div className="text-lg font-medium text-gray-600">
                    Loading...
                </div>
            </div>
        </div>
    );
}
