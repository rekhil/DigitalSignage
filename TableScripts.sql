CREATE TABLE [dbo].[Slide]
(
	[SlideId] INT NOT NULL PRIMARY KEY IDENTITY(1,1),
	[Duration] INT NOT NULL ,
	[TemplateId] INT

)



CREATE TABLE [dbo].[SlideContent]
(
	[SlideContentId] BIGINT NOT NULL PRIMARY KEY IDENTITY(1,1),
	[FilePath] VARCHAR(MAX) ,
	[SlideId] INT FOREIGN KEY REFERENCES Slide(SlideId)
)

CREATE TABLE [dbo].[SlideContent]
(
	[SlideContentId] BIGINT NOT NULL PRIMARY KEY IDENTITY(1,1),
	[FilePath] VARCHAR(MAX) ,
	[SlideId] INT FOREIGN KEY REFERENCES Slide(SlideId)
)	

CREATE TABLE [dbo].[Series]
(
	[SeriesId] bigint NOT NULL PRIMARY KEY IDENTITY(1,1),
	[SeriesName] varchar(20) NOT NULL ,
	[SeriesDescription] varchar(20),
	ResolutionX int,
	ResolutionY int,
	Orientation int,
	Category int,
	

)

alter table Slide
add SeriesId bigint FOREIGN KEY REFERENCES Series(SeriesId)