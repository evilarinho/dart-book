import React from "react";
import { useTheme } from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import * as S from "./styles";
import * as G from "../layout/styles";

const BookInfo = () => {
  const theme = useTheme();

  return (
    <G.Section primary>
      <G.Boundary>
        <G.SplitColumnFlex>
          <S.Content>
            <G.Title>O guia de Dart</G.Title>
            <G.Subtitle>Fundamentos, prática, conceitos avançados e <u>tudo mais</u>.</G.Subtitle>
            <G.Paragraph>
              Disponível impresso ou em seu leitor favorito (.pdf, .epub, .mob).
            </G.Paragraph>
            <G.Paragraph>Garanta a sua cópia: </G.Paragraph>
            
            <G.DefaultText><b><span style={{ color: "red", "font-size": "30px" }}>&#9888;</span></b> [Publicação no Kindle ainda sendo processada]</G.DefaultText>

            <p>
            <G.LinkButton
              target="_blank"
              el="noreferrer noopener"
              href="https://www.casadocodigo.com.br/products/livro-dart"
            >
              <G.Button color="#FF9900" hoverColor="#E78B00" textColor="#FFF">
                Casa do Código
              </G.Button>
            </G.LinkButton>

              <G.Button
                color={theme.dark === "true" ? "#FFF" : "#37475A"}
                hoverColor={theme.dark === "true" ? "#F4F4F4" : "#212B36"}
                textColor={theme.dark === "true" ? "#37475A" : "#FFF"}
              >
                <span>Amazon Kindle</span>
              </G.Button>
            </p>
          </S.Content>

          <S.BookCover>
            <S.Book>
              <StaticImage height={340} width={240} src="../../images/cover.jpeg" alt="Capa do livro" />
            </S.Book>
          </S.BookCover>
        </G.SplitColumnFlex>
      </G.Boundary>
    </G.Section>
  );
};

export default BookInfo;
