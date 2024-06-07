export function getProjetoId(projetos, nome) {
    const projeto = projetos.find(proj => proj.nome === nome);
    return projeto ? projeto._id : null;
}