import React, { useState } from "react";

export function Home() {
	const [tareas, setTareas] = useState("");
	const [lista, setLista] = useState([]);
	return (
		<div className="text-center mt-5">
			<h1 className="display-3 text-primary">Todo List</h1>
			<input
				value={tareas}
				onChange={e => {
					setTareas(e.target.value);
				}}
				onKeyPress={e => {
					if (e.key == "Enter") {
						setLista(lista.concat(tareas));
						setTareas("");
					}
				}}
			/>
			<ul className="list-group">
				{lista.map((item, index) => {
					return <li key={index}>{item}</li>;
				})}
			</ul>
		</div>
	);
}
