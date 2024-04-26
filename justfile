default:
	just --list

# start lume server
start:
  deno task lume --serve
