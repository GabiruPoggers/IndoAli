import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9', // Cor de fundo neutra
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  mainContent: {
    flexDirection: 'row', // Para exibir os elementos lado a lado
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80, // Espaçamento maior para dar mais respiro
  },
  // Container à esquerda
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20,
    backgroundColor: '#fff', // Fundo branco para um visual clean
    borderRadius: 8,
    height: '100%', // Preenche toda a altura
    shadowOpacity: 0, // Remover sombra
  },
  leftText: {
    fontSize: 14, // Tamanho de texto menor
    color: '#333', // Cor neutra
    textAlign: 'center',
    marginHorizontal: 20, // Adiciona margem nas laterais
  },
  // Container do formulário de conversão à direita
  formContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowOpacity: 0, // Remover sombra
  },
  usernameContainer: {
    width: '100%',
    marginBottom: 20,
  },
  usernameText: {
    fontSize: 16, // Menor, para um visual mais suave
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 12, // Menos preenchimento para um estilo mais minimalista
    borderWidth: 1,
    borderColor: '#ddd', // Cor neutra
    borderRadius: 8, // Bordas mais suaves
    marginBottom: 20,
    backgroundColor: '#f9f9f9', // Cor neutra de fundo
    fontSize: 14, // Tamanho menor para manter a leveza
    color: '#333',
  },
  button: {
    width: '100%',
    paddingVertical: 10,  // Menos altura para um visual mais simples
    backgroundColor: '#0c3b5c',  // Azul suave
    borderRadius: 6,  // Raio menor para um visual mais clean
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1, // Adicionando borda fina para definir o contorno
    borderColor: '#007BFF', // Cor da borda igual ao fundo para um visual sutil
  },
  buttonText: {
    color: '#fff',
    fontSize: 16, // Tamanho de texto mais equilibrado
    fontWeight: '500', // Peso mais leve para manter o minimalismo
    textTransform: 'uppercase', // Deixar o texto em maiúsculas para um visual mais formal
  },

  // Estilos do header
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#333', // Cor de fundo neutra
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  headerText: {
    fontSize: 20, // Tamanho de texto mais discreto
    fontWeight: 'bold',
    color: '#fff', // Texto branco
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 15,
  },
  backText: {
    fontSize: 24,
    color: '#fff',
  },

  // Estilo para o resultado da conversão
  convertedContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#eaf5ea', // Cor suave
    alignItems: 'center',
  },
  convertedText: {
    fontSize: 16, // Menor
    color: '#333',
    marginBottom: 5,
  },
  convertedValue: {
    fontSize: 20, // Tamanho médio
    fontWeight: 'bold',
    color: '#2e8b57', // Cor neutra de destaque
  },
  image: {
    width: 180, // Reduzido para mais harmonia
    height: 180,
    resizeMode: 'contain', // Ajuste a imagem dentro do container
  },
});
