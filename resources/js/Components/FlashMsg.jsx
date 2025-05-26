
const typeColors = {
    success: "bg-green-400",
    error: "bg-red-400",
    info: "bg-blue-400",
    warning: "bg-yellow-400"
};

const FlashMessage = ({ message, type = "success" }) => {
    if (!message) return null;

    const bgColor = typeColors[type] || typeColors.success;

    return (
        <div className={`absolute top-24 right-8 shadow-lg ${bgColor} px-8 rounded-md py-4 font-semibold transition duration-300`}>
            <span>{message}</span>
        </div>
    );
};

export default FlashMessage;
