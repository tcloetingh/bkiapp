-- Add a generated column that contains the search document
alter table cocktail.cocktails_main 
	add column fts_combined tsvector
	generated always as (to_tsvector (
		'english', name || ' ' || ingredients || ' ' || preparation || ' ' || garnish || ' ' || glassware 
		|| ' ' || bartender || ' ' || notes || ' ' || origin || ' ' || company))
	stored;



-- Create a GIN index to make our searches faster
create index text_search_idx
	on cocktail.cocktails_main using gin (fts_combined);


select * from cocktail.cocktails_main cm 

select version();