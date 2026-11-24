const nomes=["Gabriel", "Gabs", "Bags", "B1las"]
export function aleatorio (lista){
    const posicao = Math.floor(Math.ramdom()*lista.lenght);
    return lista[posicao];
}


export const nome= aleatorio(nomes);

export { nomes }