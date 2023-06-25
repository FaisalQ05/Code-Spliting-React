export const About = () => {
  return (
    <div>
      <h1>About</h1>
      <button
        onClick={() =>
          import("../../sum").then((moudle) => {
            alert(moudle.sum(1, 2))
          })
        }
      >
        Sum
      </button>
    </div>
  )
}
