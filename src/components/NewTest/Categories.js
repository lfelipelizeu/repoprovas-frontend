export default function Categories({ setCategory, disable }) {
    return (
        <select onChange={(event) => setCategory(event.target.value)} disabled={disable}>
            <option defaultValue hidden>Tipo</option>
            <option value={1}>P1</option>
            <option value={2}>P2</option>
            <option value={3}>P3</option>
            <option value={4}>P4</option>
            <option value={5}>Exame</option>
            <option value={6}>Outros</option>
        </select>
    )
}