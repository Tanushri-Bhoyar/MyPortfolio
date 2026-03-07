'use server';
/**
 * @fileOverview An AI tool for refining portfolio content such as 'About Me' sections or project summaries.
 *
 * - refinePortfolioContent - A function that refines draft content using AI.
 * - RefineContentInput - The input type for the refinePortfolioContent function.
 * - RefineContentOutput - The return type for the refinePortfolioContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RefineContentInputSchema = z.object({
  contentType: z
    .enum(['aboutMe', 'projectSummary'])
    .describe(
      'The type of content being refined (e.g., "aboutMe" or "projectSummary").'
    ),
  draftContent: z.string().describe('The user\u0027s draft content to be refined.'),
});
export type RefineContentInput = z.infer<typeof RefineContentInputSchema>;

const RefineContentOutputSchema = z.object({
  refinedContent: z.string().describe('The AI-generated refined content.'),
});
export type RefineContentOutput = z.infer<typeof RefineContentOutputSchema>;

export async function refinePortfolioContent(
  input: RefineContentInput
): Promise<RefineContentOutput> {
  return refinePortfolioContentFlow(input);
}

const refinePortfolioContentPrompt = ai.definePrompt({
  name: 'refinePortfolioContentPrompt',
  input: {schema: RefineContentInputSchema},
  output: {schema: RefineContentOutputSchema},
  prompt: `You are a professional content editor specialized in creating compelling and professional content for online portfolios. Your task is to refine the provided draft content for a '{{{contentType}}}' section of a portfolio, ensuring it is engaging, clear, and highlights key skills or achievements. Focus on conciseness and impact.\n\nDraft Content:\n{{{draftContent}}}\n\nPlease provide the refined content below.`,
});

const refinePortfolioContentFlow = ai.defineFlow(
  {
    name: 'refinePortfolioContentFlow',
    inputSchema: RefineContentInputSchema,
    outputSchema: RefineContentOutputSchema,
  },
  async (input) => {
    const {output} = await refinePortfolioContentPrompt(input);
    return output!;
  }
);
