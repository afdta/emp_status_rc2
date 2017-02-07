library("dplyr")
library("ggplot2")
library("tidyr")
library("jsonlite")

dat <- read.csv("/home/alec/Projects/Brookings/employment-status/data/interactive_data_oct21.csv", stringsAsFactors=FALSE, na.strings=c(""," ","NA"))

tidy <- dat %>% gather(status, count, Employed:NILF)
tidy$share <- tidy$count/tidy$Total
tidy$race <- gsub("^\\s|\\s$|\\s*[nN]on-Hispanic\\s*","",tidy$Race)
tidy$race <- sub("black", "Black", tidy$race)
tidy$race <- sub("white", "White", tidy$race)
tidy$name <- gsub("^\\s*|\\s*$","",tidy$Name)
tidy$fips <- gsub("^\\s*|\\s*$","",tidy$FIPS)

groups <- c("Latino", "Asian", "Black", "White", "Total", "All other", "American Indian")

#test summs
tst <- tidy %>% group_by(FIPS, Name, race) %>% summarise(total=sum(share, na.rm=TRUE))

nmlz <- function(chunk){
  chunk$z <- as.numeric(scale(chunk$share))
  return(chunk)
}
tidy2 <- tidy[c("fips","name","race","Total","status","count","share")] %>% filter(race %in% groups[1:4]) %>% group_by(status) %>% do(nmlz(.))
tidy2m <- tidy2 %>% group_by(status, race) %>% summarise(avg=mean(z, na.rm=TRUE), avg_share=mean(share, na.rm=TRUE))

ll <- list(obs=split(tidy2, tidy2$status), avg=split(tidy2m, tidy2m$status))

json <- toJSON(ll, digits=5, na="null")

writeLines(text = json, con = "/home/alec/Projects/Brookings/employment-status/data/emp_status.json")

geos <- unique(tidy[c("fips","name")])
geos <- geos[order(geos$name), ]
writeLines(text = toJSON(geos), con = "/home/alec/Projects/Brookings/employment-status/data/geos.json")

s <- ggplot(tidy2)
s + geom_point(aes(x=z, y=race, color=race), alpha=0.3, size=2) + 
  geom_point(aes(x=avg, y=race), data=tidy2m) +
  geom_text(aes(x=avg, y=race, label="avg."), data=tidy2m, nudge_y=0.2, color="#999999") +
  facet_wrap(~ status, ncol=1)

#with medians
s + geom_point(aes(x=z, y=race, color=race), alpha=0.3, size=2) + 
  geom_point(aes(x=med, y=race), data=tidy2m) +
  geom_text(aes(x=med, y=race, label="med."), data=tidy2m, nudge_y=0.2, color="#999999") +
  facet_wrap(~ status, ncol=1)



####STACKED BARS
tidy$facet <- paste(substr(tidy$Name,1,15), tidy$FIPS)

ew <- tidy[tidy$status=="Employed" & tidy$race=="Non-Hispanic white", c("facet", "share")]

tidy$facetEW <- factor(tidy$facet, ew[order(ew$share), "facet"])

tidy2 <- tidy[tidy$race %in% c("Latino","Non-Hispanic Asian","Non-Hispanic black","Non-Hispanic white"), ]

p <- ggplot(tidy2)
p + geom_bar(aes(x=facetEW, y=share, fill=status), stat="identity", position="stack") + 
  facet_wrap(~ Race, ncol=4) +
  coord_flip()