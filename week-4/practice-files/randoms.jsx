function Pass({ value }) {
  return <p>The value passed as prop is: {value}</p>;
}

export default function KeySet() {
  return (
    <div>
      <h1>KeySet</h1>
      <Pass value="Waleed" />
      <Pass value={"Ali"} />
      <Pass value={"Ahmed"} />
     </div>
  );
}
