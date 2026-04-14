 export function NSbutton({ title }: { title: string }) {
     const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('React button clicked');
    };
  return (
    <button onClick={handleClick}>{title}</button>
  );
}