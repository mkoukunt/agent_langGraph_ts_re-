export default function  Button({label,backgroundColor,color}: {label: string, backgroundColor: string, color: string}) {
    return (
        <button style={{ backgroundColor: backgroundColor, color: color }}>{label}</button>
    );
}