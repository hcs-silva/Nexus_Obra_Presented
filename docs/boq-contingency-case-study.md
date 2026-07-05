# Case Study: BOQ Import With Contingency

## Contexto

Ao importar um BOQ, equipas de obra precisam refletir risco real no orçamento inicial. A funcionalidade de contingência resolve este ponto com regras explícitas por tipo de custo.

## Objetivo funcional

- Importar BOQ com quantidades base.
- Definir margem percentual de imprevistos.
- Escolher alvo da margem: materiais, mão de obra ou ambos.
- Confirmar obra com valores ajustados e auditáveis.

## Fluxo

1. Upload do CSV/BOQ.
2. Parsing estruturado por itens e tipos.
3. Preview com totais base vs totais com contingência.
4. Confirmação com persistência da revisão.

## Regras de cálculo

- Materials: ajusta quantidade para absorver perdas e variação operacional.
- Labor: ajusta preço/hora para cobrir risco de retrabalho e atraso.
- Both: aplica estratégia combinada conforme regra definida.

## Valor entregue

- Orçamento mais realista no momento de adjudicação.
- Melhor comparação previsto vs realizado.
- Decisão mais rápida com preview transparente antes do commit.

## Qualidade de UX no frontend

- Validação de margem com intervalo seguro.
- Confirmação explícita para valores elevados.
- Resumo de delta absoluto e percentual no preview.
