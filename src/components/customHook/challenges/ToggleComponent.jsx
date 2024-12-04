import useToggle from './useToggle';

function ToggleComponent() {
  const [isToggled, toggle] = useToggle(true); // Initial state is true

  return (
    <div>
      <p>Is Toggled: {isToggled.toString()}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
export default ToggleComponent;