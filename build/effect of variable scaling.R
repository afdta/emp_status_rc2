#visual interpretation of standardized variables
#generalized formula of standardized variable: (x - M)/S
# Typically:
#  x: value of observation
#  M: sample mean
#  S: sample standard deviation
#  Standardizing will not preserve the ratios between two values,
#  It will scale distances by a constant, in other words the ratios of scaled distances are constant
#  E.g.
#    Take the distance between x1, x2: 
#     (a) x2-x1
#    Standardize, and look at the distance:
#     (b) (x2-M)/S - (x1-M)/S 
#       = (x2-x1)/S 
#       = (a)*s, where s=1/S



library(ggplot2)
library(tidyr)

vals <- rnorm(100, 32, 4)
hist(vals)

z1 <- scale(vals)
z2 <- (vals-median(vals))/sd(vals)
z3 <- (vals-24)/sd(vals)

sum(z1==(vals-mean(vals))/sd(vals))

hist(z1)
hist(z2)
hist(z3)

Z <- data.frame(z1=z1, z2=z2, z3=z3)
ZS <- gather(Z, var, val, z1:z3)




gg <- ggplot(Z) 

gg + geom_point(aes(x=z1, y=1), colour="#000000", alpha="0.4") +
     geom_point(aes(x=z2, y=2), colour="#000000", alpha="0.4") +
     geom_point(aes(x=z3, y=3), colour="#000000", alpha="0.4")

gg2 <- ggplot(ZS)
gg2 + geom_point(aes(x=val, y=5), colour="#000000", alpha="0.3") + 
      facet_wrap(c("var"), ncol=1, scales="free")
    
