function Livros(autor,categoria,paginas,anoLancamento,editora)  {
    
    let _autor = autor;
    this.autor = function getAutor() {
        return _autor;
    }
    this.categoria = categoria;
    this.paginas = paginas;
    this.anoLancamento = anoLancamento;
    this.editora = editora;
}

function LivroDigital(autor,categoria,paginas,anoLancamento,editora,tamanhoArquivo,formato) {
    this.tamanhoArquivo = tamanhoArquivo;
    this.formato = formato;

    Livros.call(this, autor, categoria, paginas, anoLancamento, editora);
}

function Capa(autor,categoria,paginas,anoLancamento,editora,cor,tipoCapa) {
    this.cor = cor; 
    this.tipoCapa = tipoCapa;
    
    Livros.call(this, autor, categoria, paginas, anoLancamento, editora);
    
} 

const livro1 = new Livros("Autor A", "Romance", 300, 2020, "Editora A");
const LivroDigital1 = new LivroDigital("Autor B", "Ficção", 250, 2021, "Editora B", "5MB", "PDF");
const capa1 = new Capa("Autor A", "Romance", 300, 2020, "Editora A", "Vermelha", "Dura");


console.log(livro1);
console.log(LivroDigital1);
console.log(capa1);


