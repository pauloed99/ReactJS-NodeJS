import React from "react";

export default function Accordion() {
  return (
    <div className="Accordion mt-4">
      <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button
                class="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Arena Castelão
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p>- Nome : Estádio Governador Plácido Castelão</p>
              <p>- Local : Fortaleza, CE, Brasil</p>
              <p>- Capacidade Oficial : 52.552 pessoas</p>
              <p>- Inauguração : 11 de novembro de 1973</p>
              <p>- Público Recorde : 118.496 pessoas</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Arena Fonte Nova
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p>- Nome : Complexo Esportivo Cultural Octávio Mangabeira</p>
              <p>- Local : Salvador, BA, Brasil</p>
              <p>- Capacidade Oficial : 50.025 pessoas</p>
              <p>- Inauguração : 5 de abril de 2013</p>
              <p>- Público Recorde : 51.227 pessoas</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingThree">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Estádio Mineirão
              </button>
            </h5>
          </div>
          <div
            id="collapseThree"
            class="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p>- Nome : Estádio Governador Magalhães Pinto</p>
              <p>- Local : Belo Horizonte, MG, Brasil</p>
              <p>- Capacidade Oficial : 61.846 pessoas</p>
              <p>- Inauguração : 5 de setembro de 1965</p>
              <p>- Público Recorde : 132.834 pessoas</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingFour">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Estádio Maracanã
              </button>
            </h5>
          </div>
          <div
            id="collapseFour"
            class="collapse"
            aria-labelledby="headingFour"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p>- Nome : Estádio Jornalista Mário Filho</p>
              <p>- Local : Rio de Janeiro, RJ, Brasil</p>
              <p>- Capacidade Oficial : 78.838 pessoas</p>
              <p>- Inauguração : 16 de junho de 1950</p>
              <p>- Público Recorde : 199.854 pessoas</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingFive">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Estádio Beira-Rio
              </button>
            </h5>
          </div>
          <div
            id="collapseFive"
            class="collapse"
            aria-labelledby="headingFive"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p>- Nome : Estádio José Pinheiro Borda</p>
              <p>- Local : Porto ALegre, RS, Brasil</p>
              <p>- Capacidade Oficial : 50.842 pessoas</p>
              <p>- Inauguração : 6 de abril de 1969</p>
              <p>- Público Recorde : 106 554 pessoas</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingSix">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                Estádio São Januário
              </button>
            </h5>
          </div>
          <div
            id="collapseSix"
            class="collapse"
            aria-labelledby="headingSix"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p>- Nome : Estádio Vasco da Gama</p>
              <p>- Local : Rio de Janeiro, RJ, Brasil</p>
              <p>- Capacidade Oficial : 21.880 pessoas</p>
              <p>- Inauguração : 21 de abril de 1927</p>
              <p>- Público Recorde : 40.209 pessoas</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingSeven">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                Estádio Vila Belmiro
              </button>
            </h5>
          </div>
          <div
            id="collapseSeven"
            class="collapse"
            aria-labelledby="headingSeven"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p>- Nome : Estádio Urbano Caldeira</p>
              <p>- Local : Santos, SP, Brasil</p>
              <p>- Capacidade Oficial : 17.923 pessoas</p>
              <p>- Inauguração : 12 de outubro de 1916</p>
              <p>- Público Recorde : 32.986 pessoas</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingEight">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseEight"
                aria-expanded="false"
                aria-controls="collapseEight"
              >
                Estádio La Bombonera
              </button>
            </h5>
          </div>
          <div
            id="collapseEight"
            class="collapse"
            aria-labelledby="headingEight"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p>- Nome : Estádio Alberto José Armando</p>
              <p>- Local : Buenos Aires, Argentina</p>
              <p>- Capacidade Oficial : 52.000 pessoas</p>
              <p>- Inauguração : 25 de maio de 1940</p>
              <p>- Público Recorde : 57.395 pessoas</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingNine">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseNine"
                aria-expanded="false"
                aria-controls="collapseNine"
              >
                Estádio Monumental de Núñez
              </button>
            </h5>
          </div>
          <div
            id="collapseNine"
            class="collapse"
            aria-labelledby="headingNine"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p>- Nome : Estádio Monumental Antonio Vespucio Liberti</p>
              <p>- Local : Buenos Aires, Argentina</p>
              <p>- Capacidade Oficial : 70.074 pessoas</p>
              <p>- Inauguração : 25 de maio de 1938</p>
              <p>- Público Recorde : 71.712 pessoas</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTen">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTen"
                aria-expanded="false"
                aria-controls="collapseTen"
              >
                Estádio Libertadores da América
              </button>
            </h5>
          </div>
          <div
            id="collapseTen"
            class="collapse"
            aria-labelledby="headingTen"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p>- Nome : Estadio Libertadores de América</p>
              <p>- Local : Buenos Aires, Argentina</p>
              <p>- Capacidade Oficial : 52.364 pessoas</p>
              <p>- Inauguração : 4 de março de 1928</p>
              <p>- Público Recorde : Não encontrado</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingEleven">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseEleven"
                aria-expanded="false"
                aria-controls="collapseEleven"
              >
                Estádio El Cilindro
              </button>
            </h5>
          </div>
          <div
            id="collapseEleven"
            class="collapse"
            aria-labelledby="headingEleven"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p>- Nome : Estádio Presidente Juan Domingo Perón</p>
              <p>- Local : Buenos Aires, Argentina</p>
              <p>- Capacidade Oficial : 51.389 pessoas</p>
              <p>- Inauguração : 3 de setembro de 1950</p>
              <p>- Público Recorde : 120.000 pessoas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
